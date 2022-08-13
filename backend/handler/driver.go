package handler

import (
	"github.com/gin-gonic/gin"
	"kargo/TMS/core/services"
	"kargo/TMS/handler/dto"
	"net/http"
	"strconv"
)

type driverHandler struct {
	driverService services.DriverService
}

func NewDriverHandler(driverService services.DriverService) *driverHandler {
	return &driverHandler{driverService}
}

func (h *driverHandler) GetAll(c *gin.Context) {
	drivers, err := h.driverService.FindAll()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": drivers,
	})
}

func (h *driverHandler) GetAllAvailable(c *gin.Context) {
	drivers, err := h.driverService.FindAllAvailable()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": drivers,
	})
}

func (h *driverHandler) Create(c *gin.Context) {
	var driverRequest dto.DriverRequest

	err := c.ShouldBindJSON(&driverRequest)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	driver, err := h.driverService.Create(driverRequest)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": driver,
	})
}

func (h *driverHandler) GetById(c *gin.Context) {
	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	driver, err := h.driverService.FindById(id)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": driver,
	})
}

func (h *driverHandler) Update(c *gin.Context) {
	var driverRequest dto.DriverRequest

	err := c.ShouldBindJSON(&driverRequest)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	driver, err := h.driverService.Update(id, driverRequest)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": driver,
	})
}

func (h *driverHandler) Deactivate(c *gin.Context) {
	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	driver, err := h.driverService.Deactivate(id)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": driver,
	})
}
