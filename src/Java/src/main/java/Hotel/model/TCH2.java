package Hotel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hotel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТЧ2
 */
@Entity(name = "IISHotelТЧ2")
@Table(schema = "public", name = "ТЧ2")
public class TCH2 {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКомнаты")
    private Integer номеркомнаты;

    @Column(name = "Прибытие")
    private Date прибытие;

    @Column(name = "Убытие")
    private Date убытие;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Personal")
    @Convert("Personal")
    @Column(name = "Персонал", length = 16, unique = true, nullable = false)
    private UUID _personalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Personal", insertable = false, updatable = false)
    private Personal personal;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZHRIG")
    @Convert("ZHRIG")
    @Column(name = "ЖРИГ", length = 16, unique = true, nullable = false)
    private UUID _zhrigid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZHRIG", insertable = false, updatable = false)
    private ZHRIG zhrig;


    public TCH2() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКомнаты() {
      return номеркомнаты;
    }

    public void setНомерКомнаты(Integer номеркомнаты) {
      this.номеркомнаты = номеркомнаты;
    }

    public Date getПрибытие() {
      return прибытие;
    }

    public void setПрибытие(Date прибытие) {
      this.прибытие = прибытие;
    }

    public Date getУбытие() {
      return убытие;
    }

    public void setУбытие(Date убытие) {
      this.убытие = убытие;
    }


}