import empleadoModel from '../models/empleado.js';

const empleadoController = {


create: async (req, res) => {
    try {
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } = req.body;

    const newEmpleado = new empleadoModel({
        codigo,
        nombre,
        apellido1,
        apellido2,
        codigo_departamento
    });

    await newEmpleado.save();

    res.status(201).json({
        message: 'Empleado creado correctamente',
        data: newEmpleado
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al crear el empleado'
    });
    }
},


readAll: async (_req, res) => {
    try {
    const empleados = await empleadoModel.find();

    res.status(200).json({
        data: empleados
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al obtener empleados'
    });
    }
},


readById: async (req, res) => {
    try {
    const empleado = await empleadoModel.findById(req.params.id);

    if (!empleado) {
        return res.status(404).json({
        message: 'Empleado no encontrado'
        });
    }

    res.status(200).json({
        data: empleado
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al obtener empleado'
    });
    }
},


update: async (req, res) => {
    try {
    const updatedEmpleado = await empleadoModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!updatedEmpleado) {
        return res.status(404).json({
        message: 'Empleado no encontrado'
        });
    }

    res.status(200).json({
        message: 'Empleado actualizado correctamente',
        data: updatedEmpleado
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al actualizar empleado'
    });
    }
},


delete: async (req, res) => {
    try {
    const deletedEmpleado = await empleadoModel.findByIdAndDelete(req.params.id);

    if (!deletedEmpleado) {
        return res.status(404).json({
        message: 'Empleado no encontrado'
        });
    }

    res.status(200).json({
        message: 'Empleado eliminado correctamente',
        data: deletedEmpleado
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al eliminar empleado'
    });
    }
}

};

export default empleadoController;