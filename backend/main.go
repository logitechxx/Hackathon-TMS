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

	truckRepository := repositories.NewTruckRepository(DB)
	truckService := services.NewTruckService(truckRepository)
	truckHandler := handler.NewTruckHandler(truckService)

	router := gin.Default()

	trucksRouter := router.Group("trucks")

	trucksRouter.POST("/", truckHandler.Create)

	router.Run()
}
