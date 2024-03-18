import express from 'express'
import path from 'path'

export class Server {
  private app = express()
  async start(){
    //* Middlewares
    //* Public Folder
    this.app.use(express.static('public'))
    this.app.get('*', (req, res)=> {
      const indexPath = path.join(__dirname + '../../../public/index.html')
      res.sendFile(indexPath)
      return
    })
    this.app.listen(3001, ()=>{
      console.log('server running on port 3001');
      
    })
    
  }
}