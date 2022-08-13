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
}

func NewShipmentService(repository repositories.ShipmentRepository) *shipmentService {
	return &shipmentService{repository}
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
	// KURANG NGUBAH STATUS TRUCK DAN DRIVER
	shipment, err := s.shipmentRepo.FindById(ID)

	if err != nil {
		return shipment, err
	}

	if shipment.Status != domains.Created {
		return shipment, fmt.Errorf("%v", "Shipment already allocated")
	}

	shipment.TruckID = &shipmentAllocateRequest.TruckID
	shipment.DriverID = &shipmentAllocateRequest.DriverID
	shipment.Status = domains.Allocated

	newShipment, err := s.shipmentRepo.Update(*shipment)

	return &newShipment, err
}

func (s *shipmentService) UpdateStatus(ID int, status int) (*domains.Shipment, error) {
	// KURANG NGUBAH STATUS TRUCK DAN DRIVER KALAU SUDAH COMPLETED
	shipment, err := s.shipmentRepo.FindById(ID)

	if err != nil {
		return shipment, err
	}

	if shipment.Status == domains.Created || shipment.Status == domains.Completed {
		return shipment, fmt.Errorf("%v", "Cannot update status this shipment")
	}

	shipment.Status = status

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