package handler

import (
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

	c.JSON(http.StatusOK, gin.H{
		"data": shipments,
	})
}

func (h *shipmentHandler) GetById(c *gin.Context) {
	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	shipment, err := h.shipmentService.FindById(id)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Convert to response

	c.JSON(http.StatusOK, gin.H{
		"data": shipment,
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

func (h *shipmentHandler) Update(c *gin.Context) {
	var shipmentInput dto.ShipmentInput

	err := c.ShouldBindJSON(&shipmentInput)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	shipment, err := h.shipmentService.Update(id, shipmentInput)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": shipment,
	})
}

func (h *shipmentHandler) Delete(c *gin.Context) {
	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	shipment, err := h.shipmentService.Delete(id)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Convert to response

	c.JSON(http.StatusOK, gin.H{
		"data": shipment,
	})
}
