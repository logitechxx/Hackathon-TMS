package services

import (
	"kargo/TMS/core/domains"
	"kargo/TMS/handler/dto"
	"kargo/TMS/repositories"
)

type DriverService interface {
	FindAll() ([]domains.Driver, error)
	FindById(id int) (*domains.Driver, error)
	Create(driverRequest dto.DriverRequest) (*domains.Driver, error)
	Update(id int, driverRequest dto.DriverRequest) (*domains.Driver, error)
	Deactivate(id int) (*domains.Driver, error)
}

type driverService struct {
	driverRepo repositories.DriverRepository
}

func NewDriverService(repository repositories.DriverRepository) *driverService {
	return &driverService{repository}
}

const StatusActive = true
const StatusInactive = false

func (ds *driverService) FindAll() ([]domains.Driver, error) {
	drivers, err := ds.driverRepo.FindAll()

	return drivers, err
}

func (ds *driverService) FindById(id int) (*domains.Driver, error) {
	driver, err := ds.driverRepo.FindById(id)

	return driver, err
}

func (ds *driverService) Create(driverRequest dto.DriverRequest) (*domains.Driver, error) {
	driver := domains.Driver{
		Name:        driverRequest.Name,
		PhoneNumber: driverRequest.PhoneNumber,
		Status:      StatusActive,
	}
	newDriver, err := ds.driverRepo.Create(driver)

	return newDriver, err
}

func (ds *driverService) Update(id int, driverRequest dto.DriverRequest) (*domains.Driver, error) {
	driver, err := ds.driverRepo.FindById(id)

	if err != nil {
		return driver, err
	}

	driver.Name = driverRequest.Name
	driver.PhoneNumber = driverRequest.PhoneNumber

	newDriver, err := ds.driverRepo.Update(*driver)

	return newDriver, err
}

func (ds *driverService) Deactivate(id int) (*domains.Driver, error) {
	driver, err := ds.driverRepo.FindById(id)

	if err != nil {
		return driver, err
	}

	driver.Status = StatusInactive

	newDriver, err := ds.driverRepo.Update(*driver)

	return newDriver, err
}
