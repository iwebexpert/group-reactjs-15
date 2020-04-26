import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import './ChatList.scss';

export class ChatList extends React.Component {
	render() {
		// const useStyles = makeStyles((theme) => ({
		// 	root: {
		// 		width: '100%',
		// 		maxWidth: 360,
		// 		backgroundColor: theme.palette.background.paper,
		// 	},
		// }));
		// const classes = useStyles();

		return (
				<List className="chatlist">
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<ImageIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 1" secondary="Jan 9, 2014"/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<WorkIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 2" secondary="Jan 7, 2014"/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 3" secondary="July 20, 2014"/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 4" secondary="July 20, 2014"/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 5" secondary="July 20, 2014"/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 6" secondary="July 20, 2014"/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 7" secondary="July 20, 2014"/>
					</ListItem>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Чат 8" secondary="July 20, 2014"/>
					</ListItem>
				</List>
		);
	}
}