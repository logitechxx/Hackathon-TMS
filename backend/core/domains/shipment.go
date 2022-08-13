package domains

import "time"

type Shipment struct {
	Id             int `gorm:"primaryKey"`
	ShipmentNumber string
	Origin         string
	Destination    string
	LoadingDate    time.Time
	Status         int `gorm:"default:0"`
	TruckID			*int
	Truck			Truck
	DriverID		*int
	Driver 			Driver
}

const (
	Created int = iota
	Allocated
	OngoingToOrigin
	AtOrigin
	OngoingToDestination
	AtDestination
	Completed
)

var ShipmentStatuses = [...]string{"Created", "Allocated", "Ongoing to Origin", "At Origin", "Ongoing to Destination", "At Destination", "Completed"}

func GetStatus(statusId int) string {
	return ShipmentStatuses[statusId]
}