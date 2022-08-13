package handler

import (
	"kargo/TMS/core/domains"
	"kargo/TMS/core/services"
	"kargo/TMS/handler/dto"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type shipmentHandler struct {
	shipmentService services.ShipmentService
}

func NewShipmentHandler(shipmentService services.ShipmentService) *shipmentHandler {
	return &shipmentHandler{shipmentService}
}

func (h *shipmentHandler) GetAll(c *gin.Context) {
	shipments, err := h.shipmentService.FindAll()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Convert to response
	var shipmentResponses []dto.ShipmentResponse

	for _, shipment := range shipments {
		shipmentResponse := dto.ShipmentResponse{
			Id: shipment.Id,
			ShipmentNumber: "DO-" + strconv.Itoa(shipment.Id),
			LicenseNumber: shipment.Truck.LicenseNumber,
			DriverName: shipment.Driver.Name,
			Origin: shipment.Origin,
			Destination: shipment.Destination,
			LoadingDate: shipment.LoadingDate,
			Status: domains.GetStatus(shipment.Status),
		}
		shipmentResponses = append(shipmentResponses, shipmentResponse)
	}

	c.JSON(http.StatusOK, gin.H{
		"data": shipmentResponses,
	})
}

func (h *shipmentHandler) Create(c *gin.Context) {
	var shipmentInput dto.ShipmentInput

	err := c.ShouldBindJSON(&shipmentInput)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	shipment, err := h.shipmentService.Create(shipmentInput)

	// Tambahin generate shipment number
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": shipment,
	})
}

func (h *shipmentHandler) GetStatusDropdown(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"data": domains.ShipmentStatuses[2:],
	})
	// Nanti balikinnya index
}

func (h *shipmentHandler) Allocate(c *gin.Context) {
	var shipmentAllocateInput dto.ShipmentAllocateInput

	err := c.ShouldBindJSON(&shipmentAllocateInput)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	shipment, err := h.shipmentService.Allocate(id, shipmentAllocateInput)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": shipment,
	})
}

func (h *shipmentHandler) UpdateStatus(c *gin.Context) {
	var shipmentUpdateStatusInput dto.ShipmentUpdateStatusInput

	err := c.ShouldBindJSON(&shipmentUpdateStatusInput)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	shipment, err := h.shipmentService.UpdateStatus(id, shipmentUpdateStatusInput.StatusId)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": shipment,
	})
}

// func (h *shipmentHandler) GetById(c *gin.Context) {
// 	idString := c.Param("id")
// 	id, _ := strconv.Atoi(idString)

// 	shipment, err := h.shipmentService.FindById(id)

// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	// Convert to response

// 	c.JSON(http.StatusOK, gin.H{
// 		"data": shipment,
// 	})
// }

// func (h *shipmentHandler) Update(c *gin.Context) {
// 	var shipmentInput dto.ShipmentInput

// 	err := c.ShouldBindJSON(&shipmentInput)
// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	idString := c.Param("id")
// 	id, _ := strconv.Atoi(idString)

// 	shipment, err := h.shipmentService.Update(id, shipmentInput)

// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{
// 		"data": shipment,
// 	})
// }

// func (h *shipmentHandler) Delete(c *gin.Context) {
// 	idString := c.Param("id")
// 	id, _ := strconv.Atoi(idString)

// 	shipment, err := h.shipmentService.Delete(id)

// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	// Convert to response

// 	c.JSON(http.StatusOK, gin.H{
// 		"data": shipment,
// 	})
// }