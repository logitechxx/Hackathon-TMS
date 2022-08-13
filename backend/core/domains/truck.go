package domains

type Truck struct {
	Id             int `gorm:"primaryKey"`
	LicenseNumber  string
	TruckType      string
	PlateType      string
	ProductionYear string
	Status         bool
}
