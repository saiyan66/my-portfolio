
export default function Header() {

        const person ={
        name: 'Sayan Upadhyay',
        theme: {
            backgroundColor: 'grey',
            color: 'black'
        }
    };

    return (
        

      <header>

        <div style = {person.theme}>
        <h3>{person.name}'s portfolio</h3>

        <nav>
            <ul>

            <li> <a href="hero">Hero</a> </li>
            <li> <a href="skills">Skills</a> </li>
            <li> <a href="projects">Project</a> </li>
            <li> <a href="contact">Contact</a> </li>
            </ul>
        </nav>
       </div>
      </header>
    );
  }
  
  
  