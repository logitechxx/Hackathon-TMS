package services

import (
	"kargo/TMS/core/domains"
	"kargo/TMS/handler/dto"
	"kargo/TMS/repositories"
)

type ShipmentService interface {
	FindAll() ([]domains.Shipment, error)
	FindById(ID int) (*domains.Shipment, error)
	Create(shipmentRequest dto.ShipmentInput) (domains.Shipment, error)
	Update(ID int, shipmentRequest dto.ShipmentInput) (*domains.Shipment, error)
	Delete(ID int) (*domains.Shipment, error)
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

func (s *shipmentService) FindById(ID int) (*domains.Shipment, error) {
	shipment, err := s.shipmentRepo.FindById(ID)

	return shipment, err
}

func (s *shipmentService) Create(shipmentRequest dto.ShipmentInput) (domains.Shipment, error) {
	shipment := domains.Shipment{}

	newShipment, err := s.shipmentRepo.Create(shipment)

	return newShipment, err
}

func (s *shipmentService) Update(ID int, shipmentRequest dto.ShipmentInput) (*domains.Shipment, error) {
	shipment, err := s.shipmentRepo.FindById(ID)

	if err != nil {
		return shipment, err
	}

	// shipment.Title = shipmentRequest.Title
	// shipment.Price = shipmentRequest.Price
	// shipment.AuthorID = shipmentRequest.AuthorId

	newShipment, err := s.shipmentRepo.Update(*shipment)

	return &newShipment, err
}

func (s *shipmentService) Delete(ID int) (*domains.Shipment, error) {
	shipment, err := s.shipmentRepo.FindById(ID)

	if err != nil {
		return shipment, err
	}

	newShipment, err := s.shipmentRepo.Delete(*shipment)

	return &newShipment, err
}

// Update status
