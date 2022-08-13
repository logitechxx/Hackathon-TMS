package repositories

import (
	"kargo/TMS/core/domains"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Init(dbURL string) *gorm.DB {
	db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})

	if err != nil {
		log.Fatalln(err)
	}

	db.AutoMigrate(
		&domains.Shipment{},
	)

	return db
}
