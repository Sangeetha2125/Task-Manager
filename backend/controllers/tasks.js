const { customAPIError } = require("../errors/custom-error")
const { Task } = require("../models/Task")

const getAllTasks = async(req,res,next) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        next(error)
    }   
}

const createTask = async(req,res,next) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        next(error)
    }
}

const getTask = async(req,res,next) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(task){
            return res.status(200).json({task})
        }
        next(customAPIError(`No task with id: ${taskID}`,404))
    } catch (error) {
        next(error)
    }
}

const updateTask = async(req,res,next) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true
        })
        if(task){
            return res.status(200).json({task})
        }
        next(customAPIError(`No task with id: ${taskID}`,404))
    } catch (error) {
        next(error)
    }
}

const deleteTask = async(req,res,next) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(task){
            return res.status(200).json({task})
        }
        next(customAPIError(`No task with id: ${taskID}`,404))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask 
}