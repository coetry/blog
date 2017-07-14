export default ({ children }) => (
  <h1>
    <a href="#">{ children }</a>
    <style jsx>{`
      h1 {
        font: 18px "Avenir Next", Avenir, Helvetica,
          Arial, "Lucida Grande", sans-serif;
        font-weight: 300;
        margin-bottom: 10px;
      }

      a {
        color: #eaaaaa;
        text-decoration: none;
      }

      a:hover {
        background-color: #eaaaaa;
	color: #fff;
        padding: 3px; 
        border-radius: 2px;
      }
    `}</style>
  </h1>
)
