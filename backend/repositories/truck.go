package repositories

import (
	"fmt"

	"kargo/TMS/core/domains"

	"gorm.io/gorm"
)

type TruckRepository interface {
	FindAll(search string, filter string, sortType string, sortBy string) ([]domains.Truck, error)
	FindById(ID int) (*domains.Truck, error)
	Create(truck domains.Truck) (domains.Truck, error)
	Update(truck domains.Truck) (domains.Truck, error)
}

type truckRepository struct {
	db *gorm.DB
}

func NewTruckRepository(db *gorm.DB) *truckRepository {
	return &truckRepository{db}
}

func (r *truckRepository) FindAll(search string, filter string, sortType string, sortBy string) ([]domains.Truck, error) {
	var trucks []domains.Truck

	query := r.db.Where("license_number LIKE ?", "%"+search+"%")

	if len(filter) > 0 {
		query = query.Where("truck_type = ?", filter)
	} else if len(sortType) > 0 && len(sortBy) > 0 {

		sortQuery := fmt.Sprintf("%v ", sortBy)
		sortQuery += sortType

		query = query.Order(sortQuery)
	}

	err := query.Find(&trucks).Error

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
