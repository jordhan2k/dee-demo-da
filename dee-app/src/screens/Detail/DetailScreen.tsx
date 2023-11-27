/* eslint-disable react-hooks/exhaustive-deps */
import {useRoute} from '@react-navigation/native';
import {isEmpty} from 'lodash';
import moment from 'moment';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {icons} from '../../assets/icons';
import NoResult from '../../components/NoResult';
import {commonStyles} from '../../components/styles';
import Wrapper from '../../components/Wrapper';
import {Colors} from '../../enums/colors';
import {
  fetchDetailItem,
  selectDataDetail,
  selectErrorDetail,
  selectIsLoadingDetail,
} from '../../stores/reducers/itemsSlice';
import styles from './styles';

const DetailScreen = ({navigation}: any) => {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const dataDetail = useSelector(selectDataDetail);
  const isLoading = useSelector(selectIsLoadingDetail);
  const error = useSelector(selectErrorDetail);
  useEffect(() => {
    if (route.params?._id) {
      getDataDetail(route.params?._id);
    }
  }, [route]);
  const getDataDetail = (id: string) => {
    const params = id;
    dispatch(fetchDetailItem({params}));
  };
  const handleRefresh = () => {
    getDataDetail(route.params?._id);
  };
  return (
    <Wrapper>
      <View style={commonStyles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage
            source={icons.backArrow}
            style={commonStyles.iconRegular}
          />
        </TouchableOpacity>
        <Text style={commonStyles.heading}>Item detail</Text>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <View style={[commonStyles.coverView, commonStyles.centerContent]}>
            <ActivityIndicator size={'large'} color={Colors.PRIMARY_500} />
          </View>
        ) : null}
        {!isEmpty(dataDetail) ? (
          <ScrollView
            refreshControl={
              <RefreshControl
                onRefresh={() => handleRefresh()}
                refreshing={false}
              />
            }>
            <FastImage
              source={{uri: dataDetail?.imageUrl}}
              style={styles.image}
            />
            <Text style={styles.itemName}>{dataDetail?.name}</Text>
            <Text style={styles.price}>${dataDetail?.price}</Text>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descriptionText}>
              {dataDetail?.description}
            </Text>
            <Text style={styles.description}>Available from:</Text>
            <Text style={styles.descriptionText}>
              {moment(dataDetail?.createAt).format('DD/MM/YYYY HH:mm')}
            </Text>
          </ScrollView>
        ) : null}
        {!isLoading && isEmpty(dataDetail) ? (
          <NoResult
            message={
              error?.message ?? 'Oops! We cannot get detail of this item!'
            }
          />
        ) : null}
      </View>
    </Wrapper>
  );
};

export default DetailScreen;
