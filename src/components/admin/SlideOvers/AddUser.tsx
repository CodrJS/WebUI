import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Collapse from "components/Collapse";
import Input from "components/Input";
import Select from "components/Select";
import SlideOver from "components/SlideOver";
import { useState } from "react";
import { USERROLE } from "types/User";
import { addUser } from "utils/axios/admin/User";
import { useNotification } from "utils/contexts/NotificationContext";

const AddUserSlideOver = function AddUserSlideOver({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { addNotification, removeNotification } = useNotification();
  return (
    <SlideOver title="Add User" open={open} toggleOpen={toggleOpen}>
      <form
        className="flex-col space-y-4"
        onSubmit={e => {
          e.preventDefault();
          // disable add button until finish adding
          setIsLoading(true);

          addUser(new FormData(e.currentTarget)).then(() => {
            // enable button
            setIsLoading(false);

            // close panel
            toggleOpen();

            // send notification
            const n = addNotification({
              status: "success",
              title: "Success!",
              message: "User has been successfully added!",
              hasSeen: false,
            });

            // remove notifcation after 5 seconds.
            setTimeout(() => {
              removeNotification(n);
            }, 5000);
          });
        }}
      >
        <Input name="email" type="email" required />
        <Select
          title="Role"
          name={`role`}
          defaultValue={"codr:annotator"}
          options={Object.entries(USERROLE).map(v => ({
            name: v[1],
            value: v[0],
          }))}
          onChange={() => {
            // onChange(person, { key: "role", value: e });
          }}
        />
        <Checkbox
          name="isAnonymous"
          label="Is Anonymous?"
          onChange={e => {
            const value = e.currentTarget.checked;
            setIsAnonymous(value);
            console.log(value);
          }}
        />
        {!isAnonymous ? (
          <Collapse title="Additional information (Optional)">
            <div className="flex-col space-y-4 pb-4">
              <Input name="name[first]" label="First name" type="text" />
              <Input name="name[prefered]" label="Preferred name" type="text" />
              <Input name="name[last]" label="Last name" type="text" />
              <Input name="username" addOn="@" />
            </div>
          </Collapse>
        ) : null}
        <Button type="submit" disabled={isLoading}>
          Add
        </Button>
      </form>
    </SlideOver>
  );
};

export default AddUserSlideOver;
