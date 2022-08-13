package services

import (
	"kargo/TMS/core/domains"
	"kargo/TMS/handler/dto"
	"kargo/TMS/repositories"
)

type TruckService interface {
	FindAll(search string, filter string, sortType string, sortBy string) ([]domains.Truck, error)
	Create(truckRequest dto.TruckDtoRequest) (domains.Truck, error)
	FindById(ID int) (*domains.Truck, error)
	Update(ID int, truckRequest dto.TruckDtoRequest) (*domains.Truck, error)
}

type truckService struct {
	truckRepo repositories.TruckRepository
}

func NewTruckService(repository repositories.TruckRepository) *truckService {
	return &truckService{repository}
}

func (s *truckService) Create(truckRequest dto.TruckDtoRequest) (domains.Truck, error) {
	truck := domains.Truck{
		LicenseNumber:  truckRequest.LicenseNumber,
		PlateType:      truckRequest.PlateType,
		TruckType:      truckRequest.TruckType,
		ProductionYear: truckRequest.ProductionYear,
	}

	newTruck, err := s.truckRepo.Create(truck)

	return newTruck, err
}

func (s *truckService) FindAll(search string, filter string, sortType string, sortBy string) ([]domains.Truck, error) {
	trucks, err := s.truckRepo.FindAll(search, filter, sortBy, sortType)

	return trucks, err
}

func (s *truckService) FindById(ID int) (*domains.Truck, error) {
	truck, err := s.truckRepo.FindById(ID)

	return truck, err
}

func (s *truckService) Update(ID int, truckRequest dto.TruckDtoRequest) (*domains.Truck, error) {
	truck, err := s.truckRepo.FindById(ID)

	if err != nil {
		return truck, err
	}

	truck.LicenseNumber = truckRequest.LicenseNumber
	truck.TruckType = truckRequest.TruckType
	truck.PlateType = truckRequest.PlateType
	truck.ProductionYear = truckRequest.ProductionYear

	newTruck, err := s.truckRepo.Update(*truck)

	return &newTruck, err
}
