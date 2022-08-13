package handler

import (
	"kargo/TMS/core/services"
	"kargo/TMS/handler/dto"
	"net/http"

	"github.com/gin-gonic/gin"
)

type truckHandler struct {
	truckSrv services.TruckService
}

func NewTruckHandler(truckSrv services.TruckService) *truckHandler {
	return &truckHandler{truckSrv}
}

func (h *truckHandler) Create(c *gin.Context) {
	var truckInput dto.TruckInput

	err := c.ShouldBindJSON(&truckInput)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	truck, err := h.truckSrv.Create(truckInput)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": truck,
	})
}

// func (h *truckHandler) GetAll(c *gin.Context) {
// 	trucks, err := h.truckSrv.FindAll()
// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	// Convert to response

// 	c.JSON(http.StatusOK, gin.H{
// 		"data": trucks,
// 	})
// }
