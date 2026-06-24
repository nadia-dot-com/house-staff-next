import classes from "./MyProfile.module.scss";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { Button } from "@/components/Button/Button";
import { useUpdateUserProfile } from "@/hooks/user/useUpdateUserProfile";
import { useOptions } from "@/hooks/options/useOptions";
import isEqual from "lodash/isEqual";
import omitBy from "lodash/omitBy";
import { ERROR_MESSAGES } from "@/constants/messages";
import { ErrorState } from "@/components/ErrorState/ErrorState";

export default function MyProfile() {
  const { user } = useUserContext();
  const updateProfileMutation = useUpdateUserProfile();

  const { data } = useOptions();

  const countries = data?.countries ?? [];

  const [formState, setFormState] = useState({
    name: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    postalCode: null as string | null,
    city: null as string | null,
    country: null as string | null,
  });

  useEffect(() => {
    if (!user) return;

    setFormState({
      name: user.name ?? null,
      phone: user.phone ?? null,
      address: user.address ?? null,
      postalCode: user.postalCode ?? null,
      city: user.city ?? null,
      country: user.country ?? null,
    });
  }, [user]);

  if (!user) return <ErrorState message={ERROR_MESSAGES.UNAUTHORIZED} />;

  const { email } = user;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value === "" ? null : value,
    }));
  };

  const hasChanges = useMemo(() => {
    const cleanedForm = omitBy(formState, (v) => v === null);
    const cleanedUser = omitBy(
      {
        name: user.name ?? null,
        phone: user.phone ?? null,
        address: user.address ?? null,
        postalCode: user.postalCode ?? null,
        city: user.city ?? null,
        country: user.country ?? null,
      },
      (v) => v === null,
    );

    return !isEqual(cleanedForm, cleanedUser);
  }, [formState, user]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasChanges) return;

    updateProfileMutation.mutate(formState);
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.userForm} onSubmit={handleSubmit}>
        <h2 className={classes.title}>My Profile</h2>
        <div className={classes.inputGroup}>
          <label>Name</label>
          <input
            name="name"
            placeholder="Name"
            value={formState.name ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className={classes.inputGroup}>
          <label>Email</label>
          <input className={classes.input} value={email} readOnly />
        </div>

        <div className={classes.inputGroup}>
          <label>Phone</label>
          <input
            pattern="[0-9]{9,15}"
            type="tel"
            name="phone"
            value={formState.phone ?? ""}
            placeholder="Phone"
            onChange={handleChange}
          />
        </div>

        <h4 className={classes.subTitle}>Address</h4>

        <div className={classes.inputGroup}>
          <label>Street</label>
          <input
            name="address"
            value={formState.address ?? ""}
            placeholder="Street and house number"
            onChange={handleChange}
          />
        </div>

        <div className={classes.inputGroup}>
          <label>Postal Code</label>
          <input
            name="postalCode"
            value={formState.postalCode ?? ""}
            placeholder="e.g. 12345"
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputGroup}>
          <label>City</label>
          <input
            name="city"
            value={formState.city ?? ""}
            placeholder="City"
            onChange={handleChange}
          />
        </div>

        <div className={classes.inputGroup}>
          <label>Country / Region *</label>
          <select
            name="country"
            value={formState.country ?? ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Country
            </option>

            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className={classes.buttonWrapper}>
          <Button
            type="submit"
            bgColor="black"
            textColor="white"
            text="• SAVE CHANGES"
            disabled={!hasChanges}
          />
        </div>
      </form>
    </div>
  );
}
