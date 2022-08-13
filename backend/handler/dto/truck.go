package dto

import (
	"encoding/json"
	"kargo/TMS/core/domains"
)

type TruckDtoRequest struct {
	LicenseNumber  string `json:"license_number" binding:"required"`
	PlateType      string `json:"license_type" binding:"required"`
	TruckType      string `json:"truck_type" binding:"required"`
	ProductionYear string `json:"production_year" binding:"required"`
	Status         bool   `json:"status"`
}

type TruckSearchParam struct {
	Search   string `form:"search" json:"search"`
	Filter   string `form:"filter" json:"filter"`
	SortType string `form:"sort_type" json:"sort_type"`
	SortBy   string `form:"sort_by" json:"sort_by"`
}

func (a TruckDtoRequest) ToJson() []byte {
	result, _ := json.Marshal(a)
	return result
}

func ToTruckDtoRequest(truck domains.Truck) TruckDtoRequest {
	return TruckDtoRequest{
		LicenseNumber:  truck.LicenseNumber,
		PlateType:      truck.PlateType,
		TruckType:      truck.TruckType,
		ProductionYear: truck.ProductionYear,
		Status:         truck.Status,
	}
}

func ToTrucksDto(trucks ...domains.Truck) []TruckDtoRequest {
	if len(trucks) == 0 || trucks == nil {
		return make([]TruckDtoRequest, 0)
	}
	var result []TruckDtoRequest
	for _, truck := range trucks {
		temp := ToTruckDtoRequest(truck)
		result = append(result, temp)
	}
	return result
}
