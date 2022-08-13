package domains

import "time"

type Driver struct {
	ID          int `gorm:"primaryKey"`
	Name        string
	PhoneNumber string
	CreatedAt   time.Time
	Status      string
}
