package services

import (
	"kargo/TMS/core/domains"
	"kargo/TMS/handler/dto"
	"kargo/TMS/repositories"
)

type TruckService interface {
	// FindAll() ([]domains.Truck, error)
	// FindById(ID int) (*domains.Truck, error)
	Create(truckRequest dto.TruckInput) (domains.Truck, error)
	// Update(ID int, truckRequest dto.TruckInput) (*domains.Truck, error)
	// Delete(ID int) (*domains.Truck, error)
}

type truckService struct {
	truckRepo repositories.TruckRepository
}

func NewTruckService(repository repositories.TruckRepository) *truckService {
	return &truckService{repository}
}

func (s *truckService) Create(truckRequest dto.TruckInput) (domains.Truck, error) {
	truck := domains.Truck{
		LicenseNumber:  truckRequest.LicenseNumber,
		PlateType:      truckRequest.PlateType,
		TruckType:      truckRequest.TruckType,
		ProductionYear: truckRequest.ProductionYear,
	}

	newTruck, err := s.truckRepo.Create(truck)

	return newTruck, err
}
