import {Repository} from '@domain';

export interface RepositoryCardProps {
  item: Repository;
  onPress: (item: Repository) => void;
}
