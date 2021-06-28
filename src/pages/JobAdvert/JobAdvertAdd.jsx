import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button,Dropdown,Input,TextArea,Card, Form,Grid,Header,Image,} from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import WorkingTimeService from "../../services/workingTimeService";
import WayOfWorkingService from "../../services/wayOfWorkingService";
import CityService from "../../services/cityService";
import PositionService from "../../services/positionService";
import { useHistory } from "react-router-dom";
import './JobAdvert.css';

export default function JobAdvertAdd() {
    let jobAdvertService = new JobAdvertService();
    const JobAdvertAddSchema = Yup.object().shape({
      deadline: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
      description: Yup.string().required("Bu alanın doldurulması zorunludur"),
      positionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
      workingTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
      wayOfWorkingId: Yup.string().required("Bu alanın doldurulması zorunludur"),
      openPositions: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
      cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
      minSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
      maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
    });
  
    const history = useHistory();
  
    const formik = useFormik({
      initialValues: {
        description: "",
        positionId: "",
        workingTimeId: "",
        wayOfWorkingId: "",
        openPositions: "",
        cityId: "",
        minSalary: "",
        maxSalary: "",
        deadline: "",
      },
      validationSchema: JobAdvertAddSchema,
      onSubmit: (values) => {
        values.employer = 8;
        jobAdvertService.add(values).then((result) => console.log(result.data.data));
        alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
        history.push("/jobadverts");
      },
    });
  
    const [workingTimes, setWorkingTimes] = useState([]);
    const [waysOfWorking, setWaysOfWorking] = useState([]);
    const [cities, setCities] = useState([]);
    const [positions, setPositions] = useState([]);
  
  
    useEffect(() => {
      let workingTimeService = new WorkingTimeService();
      let wayOfWorkingService = new WayOfWorkingService();
      let cityService = new CityService();
      let positionService = new PositionService();
  
      workingTimeService.getWorkingTimes().then((result) => setWorkingTimes(result.data.data));
      wayOfWorkingService.getWaysOfWorking().then((result) => setWaysOfWorking(result.data.data));
      cityService.getCities().then((result) => setCities(result.data.data));
      positionService.getPositions().then((result) => setPositions(result.data.data));
    }, []);
  
    const workingTimeOption = workingTimes.map((workingTime, index) => ({
      key: index,
      text: workingTime.name,
      value: workingTime.id,
    }));
    const wayOfWorkingOption = waysOfWorking.map((workPlace, index) => ({
      key: index,
      text: workPlace.name,
      value: workPlace.id,
    }));
    const cityOption = cities.map((city, index) => ({
      key: index,
      text: city.name,
      value: city.id,
    }));
    const positionOption = positions.map((position, index) => ({
      key: index,
      text: position.name,
      value: position.id,
    }));
  
    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    }
  
    return (
      <div>
        <Header as="h3" color="teal" textAlign="left">
                <Image src="https://res.cloudinary.com/dtewzgzgk/image/upload/v1623772439/interim-hr-experts-icon_di1e9w.png" /> İş İlanı Kayıt Portalı
            </Header>
            <Card fluid>
            <Card.Content>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field style={{marginBottom: "1rem"}}>
            
          <Dropdown
            clearable
            item
            placeholder="İş pozisyonu"
            search
            selection
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "positionId")
            }
            onBlur={formik.onBlur}
            id="positionId"
            value={formik.values.positionId}
            options={positionOption}
            />
            {formik.errors.positionId && formik.touched.positionId &&(
              <div className={"ui pointing red basic label"}>
                {formik.errors.positionId}
              </div>
            )}
            </Form.Field>
            <Form.Field>
            
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
                )}
            </Form.Field>
            <Form.Field>
            
            <Dropdown
                    clearable
                    item
                    placeholder="Çalışma yeri"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "wayOfWorkingId")
                    }
                    onBlur={formik.onBlur}
                    id="wayOfWorkingId"
                    value={formik.values.wayOfWorkingId}
                    options={wayOfWorkingOption}
                  />
                  {formik.errors.wayOfWorkingId && formik.touched.wayOfWorkingId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.wayOfWorkingId}
                    </div>
                  )}
            </Form.Field>
            <Form.Field>
            
                  <Dropdown
                    clearable
                    item
                    placeholder="Çalışma Süresi"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "workingTimeId")
                    }
                    onBlur={formik.onBlur}
                    id="workingTimeId"
                    value={formik.values.workingTimeId}
                    options={workingTimeOption}
                  />
                  {formik.errors.workingTimeId && formik.touched.workingTimeId && (
                    <div className={"ui pointing red basic label"}>{formik.errors.workingTimeId}</div>
                  )}
                </Form.Field>
                <div className="asd">
                <Form.Field>
                <Grid stackable>
                <Grid.Column width={8}>
              
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MİNİMUM"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                  </Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                  
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MAKSİMUM"
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                  </Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                  </Grid.Column>
                  </Grid>
                </Form.Field>
  
                <Form.Field>
                <Grid stackable>
                <Grid.Column width={8}>
                
                  <Input
                    style={{ width: "100%" }}
                    id="openPositions"
                    name="openPositions"
                    error={Boolean(formik.errors.openPositions)}
                    onChange={formik.handleChange}
                    value={formik.values.openPositions}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık Posisyon sayısı"
                  />
                  {formik.errors.openPositions && formik.touched.openPositions && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.openPositions}
                    </div>
                  )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    error={Boolean(formik.errors.lastDate)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "lastDate")
                    }
                    value={formik.values.lastDate}
                    onBlur={formik.handleBlur}
                    name="lastDate"
                    placeholder="Son başvuru tarihi"
                  />
                  {formik.errors.lastDate && formik.touched.lastDate && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.lastDate}
                    </div>
                  )}
                  </Grid.Column>
                  </Grid>
                </Form.Field>
                </div>
                <Form.Field>
                
                  <TextArea
                    placeholder="Açıklama"
                    style={{ minHeight: 100 }}
                    error={Boolean(formik.errors.description).toString()}
                    value={formik.values.description}
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.description && formik.touched.description && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.description}
                    </div>
                  )}
                </Form.Field>
                <Button
                  content="Ekle"
                  labelPosition="right"
                  icon="add"
                  positive
                  type="submit"
                  style={{ marginLeft: "20px" }}
                />
        </Form>
        </Card.Content>
        </Card>
      </div>
    );
  }