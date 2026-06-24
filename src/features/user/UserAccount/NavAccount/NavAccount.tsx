import classes from "./NavAccount.module.scss";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { useUserContext } from "@/context/UserContext";
import { Logout } from "./Logout/Logout";
import { userLinks } from "@/config/navigation/userLinks";

export function NavAccount() {
  const { logout } = useUserContext();

  return (
    <nav aria-label="User account navigation">
      <ul className={classes.nav}>
        {
          userLinks.map(link => (
            <li key={link.to}>
              <StyledLink to={link.to}>{link.label}</StyledLink>
            </li>
          ))
        }

        <li key="logout">        
          <Logout onClick={logout} />
        </li>
      </ul>
    </nav>
  );
}
