package domains

type Truck struct {
	ID             int `gorm:"primaryKey"`
	LicenseNumber  string
	TruckType      string
	LicenseType    string
	ProductionYear uint
	Status         string
}
