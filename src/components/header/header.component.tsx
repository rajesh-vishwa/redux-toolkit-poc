import React from "react";
import { Navbar, DropdownButton, ListGroup } from "react-bootstrap";
import styles from "./header.module.css";
import widgetMenu from "../../images/widget_add_remove_menu.png";
import widgetAddedIcon from "../../images/widget_add_icon.png";
import widgetDeleteIcon from "../../images/widget_deletion_icon.png";
import incedoIcon from "../../images/incedo_logo.png";
import logoutIcon from "../../images/logout_widget.png";
import { Layout } from "react-grid-layout";
import { userLogout } from "../../store/slices/user-slice";
import { useDispatch } from "react-redux";

type TProps = {
  layout: Layout[];
  onAddWidget: () => any;
};
const Header: React.FC<TProps> = (props) => {
  const dispatch = useDispatch();

  const logout = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(userLogout());
  };
  const { layout, onAddWidget } = props;
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Text>
          <a href="#home">
            <img
              className={styles.incedo_icon}
              src={incedoIcon}
              alt="incedoIcon"
            ></img>
          </a>
        </Navbar.Text>
      </Navbar.Collapse>

      <DropdownButton
        id="dropdown-primary"
        title={
          <span>
            Configuration{" "}
            <img
              className={styles.widget_menu}
              src={widgetMenu}
              alt="widgetMenu"
            ></img>
          </span>
        }
        variant="primary"
        className={styles.dropdown_menu}
      >
        <ListGroup className={styles.widget_list_group}>
          {layout &&
            layout.map((l) => (
              <ListGroup.Item key={l.i} className={styles.widget_list_item}>
                <span
                  className={styles.widget_list_span_text}
                >{`Card Title - ${l.i}`}</span>
                <span className={styles.widget_list_span_img}>
                  {/* {l.isAdded && (
                      <img
                        className={styles.widget_add_icon}
                        src={widgetAddedIcon}
                        alt="widgetAddedIcon" 
                        onClick={()=>{onAddWidget()}}
                      ></img>
                    )}
                    {!l.isAdded && (
                      <img
                        className={styles.widget_delete_icon}
                        src={widgetDeleteIcon}
                        alt="widgetDeleteIcon"
                      ></img>
                    )} */}
                </span>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </DropdownButton>
      <span title="logout" className={styles.sp_logout}>
        <img
          className={styles.logout_icon}
          src={logoutIcon}
          alt="logoutIcon"
          onClick={logout}
        ></img>
      </span>
    </Navbar>
  );
};

export default Header;
