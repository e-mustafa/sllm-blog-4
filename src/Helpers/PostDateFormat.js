import { formatDistanceToNow } from 'date-fns';

const PostDateFormat = ({ dateString }) => {
	return (
		<time dateTime={dateString}>
			{formatDistanceToNow(new Date(dateString), { addSuffix: true })}
		</time>
	);
};

export default PostDateFormat;
