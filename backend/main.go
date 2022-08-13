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

	shipmentRepository := repositories.NewShipmentRepository(DB)
	shipmentService := services.NewShipmentService(shipmentRepository)
	shipmentHandler := handler.NewShipmentHandler(shipmentService)

	router := gin.Default()

	shipmentRouter := router.Group("shipments")

	shipmentRouter.GET("/", shipmentHandler.GetAll)
	shipmentRouter.GET("/:id", shipmentHandler.GetById)
	shipmentRouter.POST("/", shipmentHandler.Create)
	shipmentRouter.PUT("/:id", shipmentHandler.Update)
	shipmentRouter.DELETE("/:id", shipmentHandler.Delete)

	router.Run()
}
