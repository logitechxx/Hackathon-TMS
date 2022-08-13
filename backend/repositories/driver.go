package repositories

import (
	"fmt"
	"gorm.io/gorm"
	"kargo/TMS/core/domains"
)

type DriverRepository interface {
	FindAll() ([]domains.Driver, error)
	FindById(id int) (*domains.Driver, error)
	Create(driver domains.Driver) (*domains.Driver, error)
	Update(driver domains.Driver) (*domains.Driver, error)
}

type driverRepository struct {
	db *gorm.DB
}

func NewDriverRepository(db *gorm.DB) *driverRepository {
	return &driverRepository{db}
}

func (d *driverRepository) FindAll() ([]domains.Driver, error) {
	var drivers []domains.Driver

	err := d.db.Find(&drivers).Error

	return drivers, err
}

func (d *driverRepository) FindById(id int) (*domains.Driver, error) {
	var driver domains.Driver

	result := d.db.Find(&driver, id)

	if result.Error != nil {
		return nil, fmt.Errorf("%v", result.Error)
	}

	if result.RowsAffected == 0 {
		return nil, fmt.Errorf("%v", "no record found")
	}

	return &driver, nil
}

func (d *driverRepository) Create(driver domains.Driver) (*domains.Driver, error) {
	err := d.db.Create(&driver).Error

	return &driver, err
}

func (d *driverRepository) Update(driver domains.Driver) (*domains.Driver, error) {
	err := d.db.Save(driver).Error

	return &driver, err
}
