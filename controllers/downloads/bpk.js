import Bpk from './../../models/downloads/bpk.js'

export async function getBpk (req, res) {
  try {
    const bpk = await Bpk.find(req.body)

    return res.json({
      took: 200,
      status: 'OK',
      data: bpk,
      dataLength: bpk.length,
      error: null
    })
  } catch (error) {
    return res.json({
      took: 500,
      status: 'OK',
      data: null,
      dataLength: null,
      error
    })
  }
}

export async function postBpk (req, res) {
  try {
    const bpk = await Bpk.create(req.body)

    return res.json({
      took: 200,
      status: 'OK',
      data: bpk,
      dataLength: null,
      error: null
    })
  } catch (error) {
    return res.json({
      took: 500,
      status: 'OK',
      data: null,
      dataLength: null,
      error
    })
  }
}

export async function putBpk (req, res) {
  try {
    const bpk = await Bpk.findByIdAndUpdate(req.params.idBpk, req.body, { new: true })

    return res.json({
      took: 200,
      status: 'OK',
      data: bpk,
      dataLength: null,
      error: null
    })
  } catch (error) {
    return res.json({
      took: 500,
      status: 'OK',
      data: null,
      dataLength: null,
      error
    })
  }
}

export async function deleteBpk (req, res) {
  try {
    const bpk = await Bpk.findByIdAndDelete(req.params.idBpk)

    return res.json({
      took: 200,
      status: 'OK',
      data: bpk,
      dataLength: null,
      error: null
    })
  } catch (error) {
    return res.json({
      took: 500,
      status: 'OK',
      data: null,
      dataLength: null,
      error
    })
  }
}
