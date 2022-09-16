import React from "react";
import { Container, IconWrapper, ItemWrapper, Phone, Wrapper } from "./style";
import logo from "../../assets/icon/logo.svg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import phone from "../../assets/icon/phone.svg";
import whatsapp from "../../assets/icon/whatsapp.svg";
import telegram from "../../assets/icon/telegram.svg";
import whatsapp2 from "../../assets/icon/whatsapp2.svg";
import Button from "../../generic/Button";

const Navbar = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const active = ({ isActive }) => {
    return {
      color: isActive ? "var(--redColor)" : "#213342",
    };
  };
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Container.Logo
          onClick={() => navigate("/home")}
          src={logo}
          alt="logo"
        />
        <ItemWrapper>
          {data.map((value) => {
            return (
              !value.hidden && (
                <div key={value.id}>
                  <Typography
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    <NavLink style={active} to={value.path} className="link">
                      {value?.img} {value.title} <BiChevronDown />
                    </NavLink>
                  </Typography>
                  <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography className="hover" sx={{ p: 1 }}>
                      I use Popover.
                    </Typography>
                  </Popover>
                </div>
              )
            );
          })}
        </ItemWrapper>
        <Phone>
          <img src={phone} alt="" />
          <Phone.Number>+375 (29) 596 76 76</Phone.Number>
        </Phone>
        <IconWrapper>
          <img src={whatsapp} alt="" />
          <img src={telegram} alt="" />
          <img src={whatsapp2} alt="" />
        </IconWrapper>
        <Button width={"170px"} height={"50px"}>
          Консультация
        </Button>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
