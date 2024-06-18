// src/components/Alert.jsx

//===== ВБУДОВАНІ ДИНАМІЧНІ СТИЛІ =====

// const alertStyle = {
//     margin: "8px",
//     padding: "12px 24px",
//     color: "white",
//     borderRadius: "8px",
//     backgroundColor: "black",
// }

// function changeBgColor (variant) {
//     switch(variant) {
//         case "info":
//             return "green";
//         case "error":
//             return "red";
//         case "succes":
//             return "yellow";
//         case "warning":
//             return "blue"
//         default:
//         throw new Error (`Unsupported variant prop value - ${variant}`);
//     }
// }

// export default function Alert ({variant, children}) {
//    return <p style ={{...alertStyle,  backgroundColor:changeBgColor (variant) }}>{children}</p>
// }

// src/components/Alert.jsx
import "../Alert/Alert.css"
export default function Alert ({variant,outlined, elevated, children }) {
    const classNames = ["alert", variant];
    if(elevated) {
        classNames.push("is-elevated")
    }
    if(outlined) {
        classNames.push("is-outlined")
    }
    return <p className={classNames.join(" ")}>{children}</p>
}


// src/components/Alert.jsx

import "./Alert.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];

  if (outlined) {
		classNames.push("is-outlined");
	}

  if (elevated) {
		classNames.push("is-elevated");
	}

  return <p className={classNames.join(" ")}>{children}</p>;
};




  


