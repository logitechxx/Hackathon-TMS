package dto

import "time"

type ShipmentResponse struct {
	Id             int       `json:"id"`
	ShipmentNumber string    `json:"shipment_number"`
	LicenseNumber  string    `json:"license_number"`
	DriverName     string    `json:"driver_name"`
	Origin         string    `json:"origin"`
	Destination    string    `json:"destination"`
	LoadingDate    time.Time `json:"loading_date"`
	Status			string `json:"status"`
}

type ShipmentInput struct {
	Origin         string    `json:"origin"`
	Destination    string    `json:"destination"`
	LoadingDate    time.Time `json:"loading_date"`
}

type ShipmentAllocateInput struct {
	TruckID		int `json:"truck_id" binding:"required"`
	DriverID	int `json:"driver_id" binding:"required"`
}

type ShipmentUpdateStatusInput struct {
	StatusId	int `json:"status_id" binding:"required"`
}