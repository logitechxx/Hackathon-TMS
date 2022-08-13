package domains

import "time"

type Shipment struct {
	Id             	int `gorm:"primaryKey"`
	ShipmentNumber 	string
	Origin         	string
	Destination    	string
	LoadingDate    	time.Time
	Status			string
	//TruckID		int
	//Truck			Truck
	//DriverID		int
	//Driver 		Driver
}