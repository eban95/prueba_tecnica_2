import departamentoModel from '../models/departamento.js';

const departamentoController = {

create: async (req, res) => {
    try {
    const { codigo, nombre } = req.body;

    const nuevoDepartamento = new departamentoModel({
        codigo,
        nombre
    });

    await nuevoDepartamento.save();

    res.status(201).json({
        message: 'Departamento creado correctamente',
        data: nuevoDepartamento
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al crear departamento'
    });
    }
},

readAll: async (_req, res) => {
    try {
    const departamentos = await departamentoModel.find();

    res.status(200).json({
        data: departamentos
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al obtener departamentos'
    });
    }
},

readById: async (req, res) => {
    try {
    const departamento = await departamentoModel.findById(req.params.id);

    if (!departamento) {
        return res.status(404).json({
        message: 'Departamento no encontrado'
        });
    }

    res.status(200).json({
        data: departamento
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al obtener el departamento'
    });
    }
},

update: async (req, res) => {
    try {
      const updated = await departamentoModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!updated) {
        return res.status(404).json({
        message: 'Departamento no encontrado'
        });
    }

    res.status(200).json({
        message: 'Departamento actualizado',
        data: updated
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al actualizar departamento'
    });
    }
},

delete: async (req, res) => {
    try {
    const deleted = await departamentoModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
        return res.status(404).json({
        message: 'Departamento no encontrado'
        });
    }

    res.status(200).json({
        message: 'Departamento eliminado',
        data: deleted
    });

    } catch (error) {
    console.log(error);
    res.status(500).json({
        message: 'Error al eliminar departamento'
    });
    }
}

};

export default departamentoController;