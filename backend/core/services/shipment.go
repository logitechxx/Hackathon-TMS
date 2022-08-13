package services

import (
	"fmt"
	"kargo/TMS/core/domains"
	"kargo/TMS/handler/dto"
	"kargo/TMS/repositories"
)

type ShipmentService interface {
	FindAll() ([]domains.Shipment, error)
	Create(shipmentRequest dto.ShipmentInput) (domains.Shipment, error)
	Allocate(ID int, shipmentAllocateRequest dto.ShipmentAllocateInput) (*domains.Shipment, error)
	UpdateStatus(ID int, status int) (*domains.Shipment, error)
}

type shipmentService struct {
	shipmentRepo repositories.ShipmentRepository
	driverRepo repositories.DriverRepository
	truckRepo repositories.TruckRepository
}

func NewShipmentService(shipmentRepo repositories.ShipmentRepository, driverRepo repositories.DriverRepository, truckRepo repositories.TruckRepository) *shipmentService {
	return &shipmentService{shipmentRepo, driverRepo, truckRepo}
}

func (s *shipmentService) FindAll() ([]domains.Shipment, error) {
	shipments, err := s.shipmentRepo.FindAll()

	return shipments, err
}

func (s *shipmentService) Create(shipmentRequest dto.ShipmentInput) (domains.Shipment, error) {
	shipment := domains.Shipment{
		Origin: shipmentRequest.Origin,
		Destination: shipmentRequest.Destination,
		LoadingDate: shipmentRequest.LoadingDate,
	}

	newShipment, err := s.shipmentRepo.Create(shipment)

	return newShipment, err
}

func (s *shipmentService) Allocate(ID int, shipmentAllocateRequest dto.ShipmentAllocateInput) (*domains.Shipment, error) {
	shipment, err := s.shipmentRepo.FindById(ID)

	if err != nil {
		return shipment, err
	}

	if shipment.Status != domains.Created {
		return shipment, fmt.Errorf("%v", "Shipment already allocated")
	}

	truck, err := s.truckRepo.FindById(shipmentAllocateRequest.TruckID)

	if err != nil {
		return shipment, err
	}

	driver, err := s.driverRepo.FindById(shipmentAllocateRequest.DriverID)

	if err != nil {
		return shipment, err
	}
	
	truck.Status = false
	driver.Status = false

	shipment.TruckID = &shipmentAllocateRequest.TruckID
	shipment.DriverID = &shipmentAllocateRequest.DriverID
	shipment.Status = domains.Allocated

	s.driverRepo.Update(*driver)
	s.truckRepo.Update(*truck)
	newShipment, err := s.shipmentRepo.Update(*shipment)

	return &newShipment, err
}

func (s *shipmentService) UpdateStatus(ID int, status int) (*domains.Shipment, error) {
	shipment, err := s.shipmentRepo.FindById(ID)

	if err != nil {
		return shipment, err
	}

	if shipment.Status == domains.Created || shipment.Status == domains.Completed {
		return shipment, fmt.Errorf("%v", "Cannot update status this shipment")
	}

	truck, err := s.truckRepo.FindById(*shipment.TruckID)

	if err != nil {
		return shipment, err
	}

	driver, err := s.driverRepo.FindById(*shipment.DriverID)

	if err != nil {
		return shipment, err
	}
	
	shipment.Status = status

	if status == domains.Completed {
		truck.Status = true
		driver.Status = true
	}

	s.driverRepo.Update(*driver)
	s.truckRepo.Update(*truck)

	newShipment, err := s.shipmentRepo.Update(*shipment)

	return &newShipment, err
}

// func (s *shipmentService) Delete(ID int) (*domains.Shipment, error) {
// 	shipment, err := s.shipmentRepo.FindById(ID)

// 	if err != nil {
// 		return shipment, err
// 	}

// 	newShipment, err := s.shipmentRepo.Delete(*shipment)

// 	return &newShipment, err
// }

// func (s *shipmentService) FindById(ID int) (*domains.Shipment, error) {
// 	shipment, err := s.shipmentRepo.FindById(ID)

// 	return shipment, err
// }
