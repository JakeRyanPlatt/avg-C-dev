To get a list of groups belonging to the current user:

```sh
groups $USER
```

To add a user to a group, where `group_name` is the groups name

```sh
sudo usrmod -aG group_name $USER
```

Refresh the new changes to the group, where  group name is the group's name

```
newgrp group_name
```