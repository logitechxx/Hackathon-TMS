package repositories

import (
	"fmt"

	"kargo/TMS/core/domains"

	"gorm.io/gorm"
)

type TruckRepository interface {
	FindAll() ([]domains.Truck, error)
	FindAllAvailable() ([]domains.Truck, error)
	FindById(ID int) (*domains.Truck, error)
	Create(truck domains.Truck) (domains.Truck, error)
	Update(truck domains.Truck) (domains.Truck, error)
	Delete(truck domains.Truck) (domains.Truck, error)
}

type truckRepository struct {
	db *gorm.DB
}

func NewTruckRepository(db *gorm.DB) *truckRepository {
	return &truckRepository{db}
}

func (r *truckRepository) FindAll() ([]domains.Truck, error) {
	var trucks []domains.Truck

	err := r.db.Find(&trucks).Error

	return trucks, err
}

func (r *truckRepository) FindAllAvailable() ([]domains.Truck, error) {
	var trucks []domains.Truck

	err := r.db.Where("status = true").Find(&trucks).Error

	return trucks, err
}

func (r *truckRepository) FindById(ID int) (*domains.Truck, error) {
	var truck domains.Truck

	result := r.db.Find(&truck, ID)

	if result.Error != nil {
		return nil, fmt.Errorf("%v", result.Error)
	}

	if result.RowsAffected == 0 {
		return nil, fmt.Errorf("%v", "no record found")
	}

	return &truck, nil
}

func (r *truckRepository) Create(truck domains.Truck) (domains.Truck, error) {
	err := r.db.Create(&truck).Error

	return truck, err
}

func (r *truckRepository) Update(truck domains.Truck) (domains.Truck, error) {
	err := r.db.Save(&truck).Error

	return truck, err
}

func (r *truckRepository) Delete(truck domains.Truck) (domains.Truck, error) {
	err := r.db.Delete(&truck).Error

	return truck, err
}
