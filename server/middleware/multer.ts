import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

export default fromNodeMiddleware((req, _res) => {
  // req.file is the `avatar` file
  console.log(req.body)
})
