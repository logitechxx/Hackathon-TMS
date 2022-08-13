package handler

import (
	"fmt"
	"kargo/TMS/core/domains"
	"kargo/TMS/core/services"
	"kargo/TMS/handler/dto"
	"net/http"
	"path/filepath"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/twinj/uuid"
)

type truckHandler struct {
	truckSrv services.TruckService
}

func NewTruckHandler(truckSrv services.TruckService) *truckHandler {
	return &truckHandler{truckSrv}
}

func (h *truckHandler) UploadImage(c *gin.Context) {
	// var truckInput dto.TruckDtoRequest
	idString := c.Param("id")
	id, _ := strconv.Atoi(idString)

	baseDir := "/Users/samuelgirsang/Desktop/"

	fileStnk, errStnk := c.FormFile("file_stnk")

	if errStnk != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": errStnk.Error()})
		return
	}

	extensionStnk := filepath.Ext(fileStnk.Filename)
	newFileStnk := uuid.NewV1().String() + extensionStnk

	if errUploadStnk := c.SaveUploadedFile(fileStnk, "/Users/samuelgirsang/Desktop/"+newFileStnk); errUploadStnk != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"message": "Unable to save the file",
		})
		return
	}

	fileKir, errKir := c.FormFile("file_kir")
	if errKir != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": errKir.Error()})
		return
	}

	extensionKir := filepath.Ext(fileKir.Filename)
	newFileKir := uuid.NewV1().String() + extensionKir

	if errUploadKir := c.SaveUploadedFile(fileKir, "/Users/samuelgirsang/Desktop/"+newFileKir); errUploadKir != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"message": "Unable to save the file",
		})
		return
	}

	newStnkDir := fmt.Sprintf("%v%v", baseDir, newFileStnk)
	newKirDir := fmt.Sprintf("%v%v", baseDir, newFileKir)
	truck, err := h.truckSrv.UpdateImage(id, newStnkDir, newKirDir)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": dto.ToTruckDtoRequest(*truck),
	})
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
		"data": dto.ToTruckDtoRequest(truck),
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

func (h *truckHandler) GetAllAvailable(c *gin.Context) {
	trucks, err := h.truckSrv.FindAllAvailable()
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
