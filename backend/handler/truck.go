package handler

import (
	"kargo/TMS/core/domains"
	"kargo/TMS/core/services"
	"kargo/TMS/handler/dto"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type truckHandler struct {
	truckSrv services.TruckService
}

func NewTruckHandler(truckSrv services.TruckService) *truckHandler {
	return &truckHandler{truckSrv}
}

func (h *truckHandler) Create(c *gin.Context) {
	var truckInput dto.TruckDtoRequest

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

func (h *truckHandler) GetAll(c *gin.Context) {
	search := c.Query("search")
	filter := c.Query("filter")
	sortType := c.Query("sort_type")
	sortBy := c.Query("sort_by")

	var trucks []domains.Truck

	trucks, err := h.truckSrv.FindAll(search, filter, sortType, sortBy)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": dto.ToTrucksDto(trucks...),
	})
}

func (h *truckHandler) GetById(c *gin.Context) {
	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	truck, err := h.truckSrv.FindById(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": dto.ToTruckDtoRequest(*truck),
	})
}

func (h *truckHandler) Update(c *gin.Context) {
	var truckInput dto.TruckDtoRequest

	err := c.ShouldBindJSON(&truckInput)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	truck, err := h.truckSrv.Update(id, truckInput)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": dto.ToTruckDtoRequest(*truck),
	})
}
