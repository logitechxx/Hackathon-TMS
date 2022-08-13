package main

import (
	"kargo/TMS/core/services"
	"kargo/TMS/handler"
	"kargo/TMS/repositories"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func goDotEnvVariable(key string) string {

	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}

func main() {
	dbURL := goDotEnvVariable("POSTGRES_URL")
	DB := repositories.Init(dbURL)

	router := gin.Default()

	// Truck
	truckRepository := repositories.NewTruckRepository(DB)
	truckService := services.NewTruckService(truckRepository)
	truckHandler := handler.NewTruckHandler(truckService)

	trucksRouter := router.Group("trucks")

	trucksRouter.POST("/", truckHandler.Create)
	trucksRouter.GET("/", truckHandler.GetAll)
	trucksRouter.GET("/:id", truckHandler.GetById)
	trucksRouter.PUT("/:id", truckHandler.Update)
	trucksRouter.GET("/Available", truckHandler.GetAllAvailable)

	driverRepository := repositories.NewDriverRepository(DB)
	driverService := services.NewDriverService(driverRepository)
	driverHandler := handler.NewDriverHandler(driverService)

	driverRouter := router.Group("drivers")
	driverRouter.GET("/", driverHandler.GetAll)
	driverRouter.POST("/", driverHandler.Create)
	driverRouter.GET("/:id", driverHandler.GetById)
	driverRouter.PUT("/:id", driverHandler.Update)
	driverRouter.GET("/:id/deactivate", driverHandler.Deactivate)

	// Shipment
	shipmentRepository := repositories.NewShipmentRepository(DB)
	shipmentService := services.NewShipmentService(shipmentRepository, driverRepository, truckRepository)
	shipmentHandler := handler.NewShipmentHandler(shipmentService)

	shipmentRouter := router.Group("shipments")

	shipmentRouter.GET("/", shipmentHandler.GetAll)
	shipmentRouter.GET("/GetStatusDropdown", shipmentHandler.GetStatusDropdown)
	shipmentRouter.POST("/", shipmentHandler.Create)
	shipmentRouter.POST("/Allocate/:id", shipmentHandler.Allocate)
	shipmentRouter.POST("/UpdateStatus/:id", shipmentHandler.UpdateStatus)

	router.Run()
}
