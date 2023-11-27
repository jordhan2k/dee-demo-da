/* eslint-disable react-hooks/exhaustive-deps */
import {isEmpty} from 'lodash';
import React, {useEffect} from 'react';
import {FlatList, RefreshControl, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FullScreenLoading from '../../components/FullScreenLoading';
import ListItem, {ListItemSkeleton} from '../../components/ListItem';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import NoResult from '../../components/NoResult';
import {commonStyles} from '../../components/styles';
import Wrapper from '../../components/Wrapper';
import {ScreenNames} from '../../enums/screenList';
import {
  fetchListItem,
  selectDataItems,
  selectIsLoading,
  selectIsLoadingMore,
} from '../../stores/reducers/itemsSlice';
import {Item} from '../../types/items.type';
import styles from './styles';

const ListScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const dataItems = useSelector(selectDataItems);
  const isLoading = useSelector(selectIsLoading);
  const isLoadingMore = useSelector(selectIsLoadingMore);

  useEffect(() => {
    getDataItems();
  }, []);

  const getDataItems = (page: number = 1, limit: number = 10) => {
    const params = {page, limit};
    dispatch(fetchListItem({params}));
  };

  /**
   * Handle pull-to-refresh functionality
   * @returns
   */
  const handleRefresh = () => getDataItems();

  const handleItemPress = (item: Item) => () => {
    navigation.push(ScreenNames.DETAIL, {_id: item._id});
  };

  /**
   * Get items from next page when the end of the list is reached
   * If the current data is empty, the api call will not be triggered
   * @returns
   */
  const handleEndReached = () => {
    if (isEmpty(dataItems.items)) {
      return;
    }
    const page = (Number(dataItems.currentPage) || 0) + 1;
    getDataItems(page);
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={commonStyles.heading}>List Screen</Text>
        {isLoading ? (
          <LoadingView />
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                onRefresh={() => handleRefresh()}
                refreshing={false}
              />
            }
            showsVerticalScrollIndicator
            contentContainerStyle={styles.listContainer}
            indicatorStyle={'black'}
            maxToRenderPerBatch={50}
            data={dataItems?.items}
            keyExtractor={(item, index) => `${item?._id}-${index}`}
            renderItem={({item, index}: {item: Item; index: number}) => (
              <ListItem
                {...item}
                index={index}
                onPress={handleItemPress(item)}
              />
            )}
            onEndReachedThreshold={0.5}
            onEndReached={handleEndReached}
            ListEmptyComponent={<NoResult />}
          />
        )}
      </View>
      <FullScreenLoading show={isLoadingMore} />
    </Wrapper>
  );
};
const LoadingView = () => (
  <View style={styles.skeletonContainer}>
    <LoadingSkeleton>
      <ListItemSkeleton />
      <ListItemSkeleton />
      <ListItemSkeleton />
      <ListItemSkeleton />
      <ListItemSkeleton />
    </LoadingSkeleton>
  </View>
);
export default ListScreen;
