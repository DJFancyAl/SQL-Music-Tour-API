// Dependencies
const bands = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { Band } = db

// Index Route
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            offset: req.query.page ? (req.query.page - 1) * 10 : 0,
            limit: 10,
            order: [['available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Show Route
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Create Route
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Update Route
bands.post('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(req.body, { where: { band_id: req.params.id } })
        res.status(200).json({
            message: `Successfully updated ${updatedBand} band`,
            data: updatedBand
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Route
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBand = await (Band.destroy({ where: { band_id: req.params.id } }))
        res.status(200).json({
            message: `Successfully deleted ${deletedBand} band`,
            data: deletedBand
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Export
module.exports = bands