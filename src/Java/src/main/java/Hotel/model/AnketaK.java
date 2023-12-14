package Hotel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hotel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: АнкетаК
 */
@Entity(name = "IISHotelАнкетаК")
@Table(schema = "public", name = "АнкетаК")
public class AnketaK {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерК")
    private Integer номерк;

    @Column(name = "Прибытие")
    private Date прибытие;

    @Column(name = "Убытие")
    private Date убытие;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Admin")
    @Convert("Admin")
    @Column(name = "Админ", length = 16, unique = true, nullable = false)
    private UUID _adminid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Admin", insertable = false, updatable = false)
    private Admin admin;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Personal")
    @Convert("Personal")
    @Column(name = "Персонал", length = 16, unique = true, nullable = false)
    private UUID _personalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Personal", insertable = false, updatable = false)
    private Personal personal;


    public AnketaK() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерК() {
      return номерк;
    }

    public void setНомерК(Integer номерк) {
      this.номерк = номерк;
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