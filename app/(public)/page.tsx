import professorOak from "../../public/oak.svg";

export default function Home() {

    return(

    <div className="flex flex-col gap-2 w-full">
      <h1 className="p-2 text-center font-bold text-black">Oak</h1>
      <div className="App">
        <section className="nesContainer nes-container">
          <h1 className="oakHello">Hello, I'm Professor Oak!</h1>

          <section
            className="message-list messageList"
            id="professorMessages"
            unresolved
          >
            <section className="message -right">
              <div className="wrapperOak">
                <img
                  src={professorOak}
                  id="imgProfessorOak"
                  alt="Professor Oak"
                  height="64"
                  width="64"
                />
              </div>
            </section>
          </section>
        </section>
      </div>
    </div>    
  )
}