package repositories

import (
	"fmt"
	"kargo/TMS/core/domains"

	"gorm.io/gorm"
)

type ShipmentRepository interface {
	FindAll(search string) ([]domains.Shipment, error)
	FindById(ID int) (*domains.Shipment, error)
	Create(Shipment domains.Shipment) (domains.Shipment, error)
	Update(Shipment domains.Shipment) (domains.Shipment, error)
	Delete(Shipment domains.Shipment) (domains.Shipment, error)
}

type shipmentRepository struct {
	db *gorm.DB
}

func NewShipmentRepository(db *gorm.DB) *shipmentRepository {
	return &shipmentRepository{db}
}

func (r *shipmentRepository) FindAll(search string) ([]domains.Shipment, error) {
	var shipments []domains.Shipment

	err := r.db.Preload("Truck").Preload("Driver").Where("shipment_number LIKE ?", "%" + search + "%").Find(&shipments).Error

	return shipments, err
}

func (r *shipmentRepository) FindById(ID int) (*domains.Shipment, error) {
	var shipment domains.Shipment

	result := r.db.Find(&shipment, ID)

	if result.Error != nil {
		return nil, fmt.Errorf("%v", result.Error)
	}

	if result.RowsAffected == 0 {
		return nil, fmt.Errorf("%v", "no record found")
	}

	return &shipment, nil
}

func (r *shipmentRepository) Create(shipment domains.Shipment) (domains.Shipment, error) {
	err := r.db.Create(&shipment).Error

	return shipment, err
}

func (r *shipmentRepository) Update(shipment domains.Shipment) (domains.Shipment, error) {
	err := r.db.Save(&shipment).Error

	return shipment, err
}

func (r *shipmentRepository) Delete(shipment domains.Shipment) (domains.Shipment, error) {
	err := r.db.Delete(&shipment).Error

	return shipment, err
}
