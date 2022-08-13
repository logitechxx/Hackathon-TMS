package dto

type TruckInput struct {
	LicenseNumber  string `json:"license_number" binding:"required"`
	PlateType      string `json:"license_type" binding:"required"`
	TruckType      string `json:"truck_type" binding:"required"`
	ProductionYear string `json:"production_year" binding:"required"`
}
