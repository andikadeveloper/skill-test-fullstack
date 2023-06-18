const app = require('express');
const httpClient = require('../config/httpclient');
const router = app.Router();

router.get('/', async (req, res) => {
  try {
    const result = await httpClient.get('/recruitment/positions.json', {
      params: req.query,
    });

    if (result.status !== 200) {
      throw new Error(result.statusText);
    }

    const jobs = result.data;

    return res.status(200).json({
      status: 'success',
      data: jobs
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: error.message,
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await httpClient.get(`/recruitment/positions/${id}`);

    if (result.status !== 200) {
      throw new Error(result.statusText);
    }

    const jobDetail = result.data;

    if (jobDetail.id === undefined) {
      res.status(404).json({
        status: 'fail',
        message: 'Job not found',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: jobDetail
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: error.message,
    });
  }
});

module.exports = router;
