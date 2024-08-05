const asyncHandler = (requestHandler) =>{
    (req,res,next =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) =>next(err))
    })
}










// const asyncHandler = () => async (req,res,next) =>{
// try {
    // await(req,res,next)
// } catch (error) {
//     res.status(err.code || 400).json({
//         message:err.message,
//     success:false
//     })
// }
